
import { Stack, Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Paging(props) {
  const { total, setPage, page } = props
  const handle_changePage = (e,newPage)=>{
    setPage(newPage)
    console.log("Selected Page:", newPage);
  }

  const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          ul: {
            '& .MuiPaginationItem-root': {
              color: 'white', // Màu của các item
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#e4d804', // Màu nền của item được chọn
              color: '#000', // Màu chữ của item được chọn
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: '#e4d804', // Màu nền khi hover
              color: '#000', // Màu chữ khi hover
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} sx={{ color: 'white'}}>
        <Pagination count={total} page={page} onChange={handle_changePage} />
      </Stack>
    </ThemeProvider>
  );
}