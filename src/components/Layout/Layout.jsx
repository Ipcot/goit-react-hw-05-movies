import { AppBar } from 'components/AppBar';
import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="60px 1fr">
      <AppBar />
      <Outlet />
    </Box>
  );
};
