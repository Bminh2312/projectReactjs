
import React, { useEffect, useState } from 'react'


import { Box, Container, Grid, ListItem, ListItemText, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewMovies } from '../../redux/reviewMovieSlice';
import Paging from '../paging/Paging';







export default function ReviewMovies(props) {
  const { movie_id } = props;
  const [page, setPage] = useState(1)
  const { items, status, total } = useSelector(state => state.reviewMovies);
  const dispatch = useDispatch();


  useEffect(() => {
    if (status === "start") {
      dispatch(fetchReviewMovies({ id: movie_id, page: page }));
    }
  }, [page]);

  console.log(items)

  return (



    <Container maxWidth="xxl" sx={{ maxheight: "200px", verflowY: 'auto' }}>
      {items && 
      <Box>
      <Typography variant='h3' sx={{ m: 10, color: '#e4d804' }} >
        Reviewer:
      </Typography>
    </Box>}

      <Container maxWidth="xxl" sx={{ maxheight: "200px", bgcolor: 'background.paper', verflowY: 'auto' }}>
        {items && items.map((item, index) => (
          <Grid container key={index} spacing={2} alignItems="flex-start" style={{ width: '100%' }}>
            <Grid item xs={4} sm={2} style={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: '30px', // Đặt kích thước cố định cho hình ảnh
                  height: '30px', // Đặt kích thước cố định cho hình ảnh
                  aspectRatio: '1 / 1', // Tạo hình vuông cho Box
                  overflow: 'hidden', // Ẩn phần hình ảnh tràn ra ngoài
                  borderRadius: '50%', // Bo tròn góc của hình ảnh
                }}
              >
                <img
                  style={{
                    width: '100%', // Chiếm toàn bộ chiều rộng của Box
                    height: '100%', // Chiếm toàn bộ chiều cao của Box
                    objectFit: 'cover', // Đảm bảo hình ảnh không bị biến dạng
                  }}
                  src={`https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`}

                />
              </Box>
            </Grid>
            <Grid item xs={8} sm={10}>
              <Box>
                <ListItemText
                  primary={item.author_details.username}
                  secondary={
                    <Box sx={{ mt: 1, overflow: 'auto', maxHeight: 'auto' }}>
                      {item.content}
                    </Box>
                  }
                />
              </Box>
            </Grid>
          </Grid>
        ))
        }

        {total === 0 ? <></> : <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '10px' }}>
          <Paging total={total} page={page} setPage={setPage} />
        </Box>
        }
      </Container>

    </Container>

  );
}

