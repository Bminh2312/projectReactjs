
import React, { useEffect } from 'react'

import { FixedSizeList } from 'react-window';
import { Box, Container, Grid, ListItem, ListItemText } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewMovies } from '../../redux/reviewMovie';


function renderRow(props) {
  const { index, style, data } = props;
  const item = data[index];

  return (
    <ListItem style={{ ...style, display: 'flex', alignItems: 'flex-start', height:"300px", padding: '10px' }} key={index} component="div" disablePadding>
      <Grid container spacing={2} alignItems="flex-start" style={{ width: '100%' }}>
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
    </ListItem>
  );
}




export default function ReviewMovies(props) {
  const { movie_id } = props;
  const { items, status } = useSelector(state => state.reviewMovies);
  const dispatch = useDispatch();

  const getItemSize = index => {
    const item = items[index];
    // Adjust this calculation based on your content. Example: content length.
    const contentHeight = item.content.length / 100 * 20; // Example, adjust as needed
    return Math.max(50, contentHeight + 70); // Adjust the minimum height as needed
  };

  useEffect(() => {
    if (status === "start") {
      dispatch(fetchReviewMovies({ id: movie_id, page: 1 }));
    }
  }, []);

  return (
    <Container maxWidth="xxl" sx={{ height: 450, bgcolor: 'background.paper' }}>
      <FixedSizeList
        height={450}
        width={'100%'}
        itemSize={350} // Điều chỉnh kích thước hàng để phù hợp với nội dung
        itemCount={items.length}
        overscanCount={10}
        itemData={items}
      >
        {renderRow}
      </FixedSizeList>
    </Container>
  );
}

