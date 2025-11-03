import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  // 🔹 log detalhado no terminal (sem [object Object])
  console.error("⚠️  ERROR:", err.stack ?? JSON.stringify(err, null, 2));

  // status padrão
  const status = Number(err?.status) || 500;

  // mensagem padrão
  let message: string | string[] = "Internal Server Error";

  // 🔹 validação Joi
  if (err?.isJoi || err?.details) {
    message = (err.details ?? []).map((d: any) => d.message);
    return res.status(422).json({
      error: {
        name: "ValidationError",
        count: message.length,
        details: message,
      },
    });
  }

  // 🔹 Error nativa do JS
  if (err instanceof Error && err.message) {
    message = err.message;
  }

  // 🔹 objeto simples com "message"
  else if (typeof err?.message === "string") {
    message = err.message;
  }

  // 🔹 string direta
  else if (typeof err === "string") {
    message = err;
  }

  // 🔹 resposta final
  return res.status(status).json({
    error: {
      name: err?.name ?? "Error",
      message,
    },
  });
}
