# ベースとなるNodeの環境（軽めのLinux + Node）
FROM node:20-alpine

# コンテナ内の作業ディレクトリ
WORKDIR /app

# 依存関係インストール用に package*.json だけ先にコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# 開発サーバーを立ち上げるコマンド
# Vite を想定。--host 0.0.0.0 を付けて外からアクセス可能にする
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
