import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function Alerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="success">This is a success alert — check it out!</Alert>
  </Stack>
  );
}