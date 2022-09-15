import { VscOctoface } from 'react-icons/vsc';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { authOperation, authSelectors } from 'redux/auth';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <Stack direction="row">
      <Chip
        icon={<VscOctoface fontSize="large" color="orange" />}
        label={name}
        variant="outlined"
        sx={{ my: 2 }}
      />

      <Button
        variant="outlined"
        sx={{ my: 1.8, mx: 1.5 }}
        onClick={() => dispatch(authOperation.logOut())}
      >
        LogOut
      </Button>
    </Stack>
  );
}