import {
  Stack,
  Box,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import { CommentBank, DeleteForever, CloseOutlined } from '@mui/icons-material';
import Card from '@mui/material/Card';
import MuiAvatar from 'src/components/Avatar/Avatar';
import Typography from 'src/components/Typography/Typography';
import { formatDate } from 'src/utils/date-formate';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blueGrey, green, grey, red } from '@mui/material/colors';
import ToolTip from 'src/components/ToolTip/ToolTip';

import MuiDialog from 'src/components/Dialog/Dialog';
import useDialog from 'src/hooks/use-dialog';
import Button from 'src/components/Button/Button';

import useAuth from 'src/hooks/useAuth';
import { useDelete, usePost } from 'src/hooks/useRequest';
import useSnackbar from 'src/hooks/use-snackbar';
import Alert from 'src/components/Alert/Alert';

//for confirm dialog

// import { styled } from '@mui/material';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CommentModel({ open, handleOpen, handleClose, comments, user, phoneId }) {
  const { mutateAsync } = usePost(`comment/createcomment?phoneId=${phoneId}`, ['phonesData']);

  const handleCreateComment = async () => {
    try {
      await mutateAsync({ comment: 'hello how are you soghat' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MuiDialog
        dialogTitle={'Comments'}
        handleClose={handleClose}
        handleOpen={handleOpen}
        maxWidth={'md'}
        open={open}
      >
        {comments?.length > 0 ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button
                variant={'contained'}
                type={'button'}
                onClickHandler={() => handleCreateComment(phoneId)}
              >
                Add A Comment
              </Button>
            </Box>
            {comments?.map((comment) => {
              return (
                <Box sx={{ my: '2em' }}>
                  <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <ToolTip title={comment?.owner?.name}>
                        <MuiAvatar imageSrc={comment?.owner?.profilePicture} />
                      </ToolTip>
                      <Box sx={{ ml: '1em' }}>
                        <Typography component={'div'} variant={'body1'} sx={{ fontWeight: '600' }}>
                          {comment?.owner?.name}
                        </Typography>
                        <Typography component={'div'} variant={'body2'} sx={{ fontWeight: '600' }}>
                          {comment?.owner?.role}
                        </Typography>
                        <Typography component={'div'} variant={'body2'} sx={{ fontWeight: '600' }}>
                          {formatDate(comment?.createdAt)}
                        </Typography>
                        <Typography
                          component={'div'}
                          variant={'p'}
                          sx={{ mt: '1em', color: blueGrey['A700'] }}
                        >
                          {comment?.comment}
                        </Typography>
                      </Box>
                    </Box>

                    {user?.email === comment?.owner.email && (
                      <Box>
                        <ToolTip title={'delete'}>
                          <DeleteForever />
                        </ToolTip>
                      </Box>
                    )}
                  </Stack>
                  <Divider />
                </Box>
              );
            })}
          </>
        ) : (
          <div>
            <Typography component={'div'} variant={'h3'} sx={{ textAlign: 'center' }}>
              No comments for this phone
            </Typography>
            <Button
              variant={'contained'}
              type={'button'}
              onClickHandler={() => handleCreateComment(phoneId)}
            >
              Add A Comment
            </Button>
          </div>
        )}
      </MuiDialog>
    </>
  );
}

function ConfirmDialog({ handleClose, confirmDialogOpen, phoneData, snackbarActions }) {
  const { mutateAsync } = useDelete(`phone/deletephone?phoneId=${phoneData?._id}`, ['phonesData']);

  const handleDeletePhone = async (phoneObj) => {
    try {
      await mutateAsync();
      snackbarActions(`deleted phone model ${phoneObj?.model}`, 'success', true);
      handleClose();
    } catch (err) {
      snackbarActions(err?.message, 'error', true);
    }
  };

  return (
    <>
      <Dialog onClose={handleClose} open={confirmDialogOpen}>
        <DialogTitle sx={{ m: 0, p: 2 }}>{phoneData?.model}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseOutlined />
        </IconButton>
        <Divider />
        <DialogContent>
          <Card>
            <Typography component={'div'} variant={'body1'} gutterBottom={true}>
              Model: {phoneData?.model}
            </Typography>
            <Typography component={'div'} variant={'body1'} gutterBottom={true}>
              Brand: {phoneData?.brand}
            </Typography>
            <Typography
              component={'div'}
              variant={'body1'}
              gutterBottom={true}
              sx={{ color: `${phoneData?.status === 'recovered' ? green['A700'] : red['900']}` }}
            >
              Status: {phoneData?.status}
            </Typography>
            <Typography component={'div'} variant={'body1'} gutterBottom={true}>
              Address: {phoneData?.address}
            </Typography>

            <Typography component={'div'} variant={'h6'} gutterBottom={true} sx={{ mt: '1em' }}>
              Images of {phoneData?.model}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', my: '1em' }}>
              {phoneData?.images?.slice(0, 2).map((img, idx) => (
                <img
                  width={'200px'}
                  height={'200px'}
                  style={{ objectFit: 'cover' }}
                  src={img}
                  key={idx}
                  alt="phone-image"
                />
              ))}
            </Box>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button type={'button'} onClickHandler={handleClose} variant={'contained'}>
            Cancel
          </Button>
          <Button
            type={'button'}
            onClickHandler={() => handleDeletePhone(phoneData)}
            variant={'contained'}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function PhoneCard({ phone }) {
  const { handleClose, handleOpen, open } = useDialog();

  const {
    handleClose: handleConfirmDialogClose,
    handleOpen: handleConfirmDialogOpen,
    open: confirmDialogOpen,
  } = useDialog();

  const { alertSeverity, handleSnackbarClose, snackbarActions, snackbarMessage, snackbarOpen } =
    useSnackbar();

  const { user } = useAuth();

  return (
    <>
      <Alert
        alertSeverity={alertSeverity}
        snackbarMessage={snackbarMessage}
        handleSnackbarClose={handleSnackbarClose}
        snackbarOpen={snackbarOpen}
      />
      <ConfirmDialog
        handleClose={handleConfirmDialogClose}
        confirmDialogOpen={confirmDialogOpen}
        phoneData={phone}
        snackbarActions={snackbarActions}
      />
      <Card sx={{ width: '100%', p: '1em', my: '2em' }}>
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MuiAvatar imageSrc={phone?.owner?.profilePicture} />
            <Box sx={{ ml: '1em' }}>
              <Typography
                component={'div'}
                variant={'body2'}
                sx={{ fontSize: '.9rem', fontWeight: '800' }}
              >
                {phone?.owner?.name}
              </Typography>
              <Typography
                component={'div'}
                variant={'body2'}
                sx={{ fontSize: '.7rem', fontWeight: '600' }}
              >
                {phone?.owner?.role}
              </Typography>
              <Typography
                component={'div'}
                variant={'body2'}
                sx={{ fontSize: '.7rem', fontWeight: '600' }}
              >
                {formatDate(phone?.createdAt)}
              </Typography>
            </Box>
          </Box>

          {user?.email === phone?.owner?.email && (
            <Box>
              <ToolTip title={'delete'}>
                <DeleteForever onClick={handleConfirmDialogOpen} />
              </ToolTip>
            </Box>
          )}
        </Stack>
        <Box sx={{ my: '1em', width: '100%' }}>
          <Slider {...settings}>
            {phone?.images?.map((img, idx) => (
              <div key={idx}>
                <img
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  src={img}
                  alt="image"
                />
              </div>
            ))}
          </Slider>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ToolTip title={'comments'}>
            <CommentBank onClick={handleOpen} />
          </ToolTip>
        </Box>
        <CommentModel
          comments={phone?.comments}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
          user={user}
          phoneId={phone?._id}
        />
        <Typography
          component={'div'}
          variant={'p'}
          gutterBottom={true}
          sx={{ fontSize: '1.5rem', fontWeight: '600', color: grey['600'] }}
        >
          Mobile Info
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '.8rem',
            justifyContent: 'space-between',
            my: '1em',
          }}
        >
          <Typography
            component={'div'}
            variant={'body1'}
            gutterBottom={true}
            sx={{ fontSize: 'inherit' }}
          >
            Model: {phone?.model}
          </Typography>
          <Typography
            component={'div'}
            variant={'body1'}
            gutterBottom={true}
            sx={{ fontSize: 'inherit' }}
          >
            Brand: {phone?.brand}
          </Typography>
          <Typography
            component={'div'}
            variant={'body1'}
            gutterBottom={true}
            sx={{
              color: `${phone?.status === 'recovered' ? green['A700'] : red['900']}`,
              fontSize: 'inherit',
            }}
          >
            Status: {phone?.status}
          </Typography>
          <Typography
            component={'div'}
            variant={'body1'}
            gutterBottom={true}
            sx={{ fontSize: 'inherit' }}
          >
            Address: {phone?.address}
          </Typography>
        </Box>

        <Box>
          <Typography
            component={'div'}
            variant={'body2'}
            sx={{ fontSize: '1.5rem', fontWeight: '600', color: grey['600'] }}
          >
            Mobile Description:
          </Typography>
          <Typography
            component={'div'}
            variant={'p'}
            sx={{ fontSize: '1rem', fontWeight: '300', color: grey['800'] }}
          >
            {phone?.description}
          </Typography>
        </Box>
      </Card>
    </>
  );
}

export default PhoneCard;
