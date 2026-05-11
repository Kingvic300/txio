use axum::{routing::post, Router};
use crate::api::handlers::terminal_handler;
use crate::services::terminal_service::TerminalService;

pub fn router(service: TerminalService) -> Router {
    Router::new()
        .route("/execute", post(terminal_handler::execute))
        .with_state(service)
}
