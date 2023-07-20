import { Pagination, PaginationItem, Stack } from '@mui/material';

interface Props {
  total: number;
  currentPage: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const SmallPagination = ({ total, currentPage, handleChange }: Props) => {
  return (
    <Stack spacing={2} style={{ alignSelf: 'flex-end' }}>
      <Pagination
        count={total}
        renderItem={(item: any) => (
          <PaginationItem
            style={{
              color: item.page === currentPage ? '#0054BC' : '#C6CEDD',
              fontSize: '1.25rem',
              fontFamily: 'Hind Siliguri',
              fontWeight: 500,
              backgroundColor:
                item.page === currentPage ? 'transparent' : 'transparent',
            }}
            {...item}
          />
        )}
        page={currentPage}
        onChange={handleChange}
        size="small"
      />
    </Stack>
  );
};

export default SmallPagination;
