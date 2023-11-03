import { useTheme } from "@emotion/react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

export interface NewsletterProps {
  mailchimpURL: string;
  uniqueAntiSpamId: string;
  title: string;
  textLabel: string;
}

export default function Newsletter({
  mailchimpURL,
  uniqueAntiSpamId,
  title,
  textLabel,
}: NewsletterProps) {
  const theme = useTheme();
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        css={{
          fontSize: "1.6em",

          fontWeight: 600,
          marginBottom: "1em",
        }}
      >
        {title}
      </p>
      <Box
        component="form"
        action={mailchimpURL}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        sx={{
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <TextField
          sx={{ width: "20rem", maxWidth: "70vw" }}
          id="newsletter-form-email"
          label={textLabel}
          variant="outlined"
          required
          type="email"
          autoComplete="email"
          name="EMAIL"
        />
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <TextField type="text" name={uniqueAntiSpamId} value="true" />
        </div>
        <IconButton
          type="submit"
          sx={{
            width: "4rem",
            marginLeft: "0.5rem",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "4px",
            color: "white",
            svg: { transition: "all 100ms linear" },
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              svg: { transform: "scale(1.15)" },
            },
          }}
          name="subscribe"
          value="Subscribe"
          id="mc-embedded-subscribe"
        >
          <SendIcon />
        </IconButton>
      </Box>
    </div>
  );
}
