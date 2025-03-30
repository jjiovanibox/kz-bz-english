import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contacts() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        mb: 8,
        p: 4,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* タイトル */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        お問い合わせ
      </Typography>

      {/* フォーム */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        {/* お名前 */}
        <TextField
          id="name"
          label="お名前"
          variant="outlined"
          fullWidth
          required
        />

        {/* メールアドレス */}
        <TextField
          id="email"
          label="メールアドレス"
          type="email"
          variant="outlined"
          fullWidth
          required
        />

        {/* メッセージ */}
        <TextField
          id="message"
          label="メッセージ"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
        />

        {/* 送信ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            alignSelf: "center",
            px: 5,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          送信
        </Button>
      </Box>
    </Container>
  );
}