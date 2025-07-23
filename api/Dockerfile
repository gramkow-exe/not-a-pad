# Etapa 1: Build
FROM golang:1.23-alpine AS builder

# Instala dependências úteis
RUN apk add --no-cache git

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Baixa dependências
RUN go mod download

# Compila o binário
RUN go build -o main .

# Etapa 2: Execução
FROM alpine:latest

# Instala certificados TLS (recomendado para chamadas HTTPS)
RUN apk --no-cache add ca-certificates

# Define diretório de trabalho
WORKDIR /root/

# Copia binário da etapa de build
COPY --from=builder /app/main .

# Expõe a porta usada pelo Fiber (por padrão, 3000)
EXPOSE 3000

# Comando para rodar o app
CMD ["./main"]
