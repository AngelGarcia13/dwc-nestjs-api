FROM node:12.13-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:12.13-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG PORT=3000
ENV PORT ${PORT}
ARG MONGO_URL=mongodb+srv://username:pass@servername.mongodb.net/DBName?retryWrites=true&w=majority
ENV MONGO_URL=${MONGO_URL}
WORKDIR /app
COPY --from=builder /app ./
EXPOSE ${PORT}
CMD ["npm", "run", "start:prod"]