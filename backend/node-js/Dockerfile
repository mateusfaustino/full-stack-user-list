# imagem
FROM node:alpine

# Em qual diretório eu quero trabalhar? 
WORKDIR /src

# Copiar todos os arquivos que começam com package e terminam com json
COPY package*.json ./

# Rodar o npm install e instalar as dependências
RUN npm install

# Copiar todo o restante dos arquivos
COPY . .

# Qual porta do meu servidor eu quero expor para acessar pela minha máquina externa?
EXPOSE 5000

# Qual o comando que meu servidor precisa rodar para iniciar o node?
CMD ["npm", "start"]