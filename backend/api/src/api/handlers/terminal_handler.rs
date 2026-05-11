use axum::{extract::State, Json};
use crate::services::terminal_service::{TerminalService, CommandResult};
use crate::dtos::request::TerminalCommandRequest;
use crate::utils::error::AppError;
use validator::Validate;

pub async fn execute(
    State(service): State<TerminalService>,
    Json(payload): Json<TerminalCommandRequest>,
) -> Result<Json<CommandResult>, AppError> {
    payload.validate()
        .map_err(|e| AppError::ValidationError(e.to_string()))?;

    let result = service.execute(&payload.command).await
        .map_err(|e| AppError::InternalError(e))?;
    
    Ok(Json(result))
}
