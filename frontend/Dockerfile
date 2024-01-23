# Definir a imagem base que será usada
FROM node:18.17.1-alpine3.17 AS builder

# Definir o diretório de trabalho para a aplicação
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos para o diretório de trabalho
COPY . .

# Buildar a aplicação
RUN npm run build

# Definir a imagem base para a aplicação
FROM nginx:1.25.2-alpine AS production

VOLUME /var/cache/nginx

# Copiar os arquivos do projeto angular para a imagem
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Copiar os arquivos de configuração do nginx para a imagem
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta do nginx
EXPOSE 80

# Iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
