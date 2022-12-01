export function sanitizeInput(input) {
    return input.replaceAll(/[&/\\#,+()$~%.^'":*?<>{}]/g, '');
}
