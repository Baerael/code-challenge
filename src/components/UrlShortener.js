import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, TextField, Button, Typography, Grid } from '@mui/material';
import { green } from '@mui/material/colors';

function UrlShortener() {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const shortUrl = useSelector(state => state.url.shortUrl);
  const error = useSelector(state => state.url.error);

  const shorten = () => {
    dispatch({ type: 'SHORTEN_URL_REQUEST', payload: url });
  };

  return (
    <Grid container justifyContent="center">
    <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", m: 2, p: 2, width: 800 }} elevation={4}>
      <TextField 
        label="URL" 
        value={url} 
        onChange={e => setUrl(e.target.value)} 
        variant="outlined" 
        fullWidth 
      />
      <Button variant="contained" color="primary" onClick={shorten} sx={{ mt: 2 }}>
        Shorten
      </Button>
      {shortUrl && 
        <Typography variant="body1" color={green[500]} sx={{ mt: 2 }}>
          Shortened URL: {shortUrl}
        </Typography>
      }
      {error && 
        <Typography variant="body1" sx={{ mt: 2 }}>
          Error: {error}
        </Typography>
      }
    </Card>
  </Grid>
  );
}

export default UrlShortener;
