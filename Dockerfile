FROM node:12.13-alpine As build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:12.13-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PORT 8080
ENV MONGO_URL=mongodb+srv://username:pass@servername.mongodb.net/DWCProfiles?retryWrites=true&w=majority
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 8080
CMD ["node", "dist/main"]
