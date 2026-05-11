use std::process::Command;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone)]
pub struct TerminalService;

#[derive(Debug, Serialize, Deserialize)]
pub struct CommandResult {
    pub output: String,
    pub status: String, // "success" or "error"
}

impl TerminalService {
    pub fn new() -> Self {
        Self
    }

    pub async fn execute(&self, command_str: &str) -> Result<CommandResult, String> {
        let parts: Vec<&str> = command_str.split_whitespace().collect();
        if parts.is_empty() {
            return Err("Empty command".to_string());
        }

        let cmd = parts[0];
        let args = &parts[1..];

        // Security check: Only allow 'txio' and 'cargo'
        if cmd != "txio" && cmd != "cargo" {
            return Ok(CommandResult {
                output: format!("bash: command not found: {}. Only 'txio' and 'cargo' are authorized.", cmd),
                status: "error".to_string(),
            });
        }

        let output = Command::new(cmd)
            .args(args)
            .output();

        match output {
            Ok(out) => {
                let stdout = String::from_utf8_lossy(&out.stdout).to_string();
                let stderr = String::from_utf8_lossy(&out.stderr).to_string();
                
                let full_output = if out.status.success() {
                    if stdout.is_empty() { stderr } else { stdout }
                } else {
                    if stderr.is_empty() { stdout } else { stderr }
                };

                Ok(CommandResult {
                    output: full_output,
                    status: if out.status.success() { "success".to_string() } else { "error".to_string() },
                })
            }
            Err(e) => {
                Ok(CommandResult {
                    output: format!("Execution failed: {}", e),
                    status: "error".to_string(),
                })
            }
        }
    }
}
