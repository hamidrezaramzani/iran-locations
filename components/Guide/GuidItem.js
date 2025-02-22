'use client';
/* eslint-disable react/display-name */
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Alert,
  Button,
  Grid,
  Table,
  TableBody,
  TableHead,
  Snackbar,
  TableContainer,
  Typography,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
const GuideItem = ({ children }) => (
  <Grid width="100%" paddingY="50px">
    {children}
  </Grid>
);

GuideItem.Title = ({ children }) => (
  <Typography
    component="h3"
    fontSize="18px"
    textAlign="center"
    paddingY="10px"
    fontFamily="iran-yekan"
  >
    {children}
  </Typography>
);

GuideItem.Description = ({ children }) => (
  <Typography
    component="p"
    fontSize="14px"
    textAlign="center"
    color="#777"
    fontFamily="iran-yekan"
    paddingY="10px"
  >
    {children}
  </Typography>
);

GuideItem.Inputs = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  return (
    <TableContainer
      component={Paper}
      sx={{ margin: '50px 0', textAlign: 'center', fontFamily: 'iran-yekan' }}
    >
      <Table
        sx={{
          minWidth: 250,
          direction: 'rtl',
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontFamily: 'iran-yekan' }}>
              {t('queryBuilder:table.expand.guide.table.column.name')}
            </TableCell>
            <TableCell align="center" sx={{ fontFamily: 'iran-yekan' }}>
              {t('queryBuilder:table.expand.guide.table.column.description')}
            </TableCell>
            <TableCell align="center" sx={{ fontFamily: 'iran-yekan' }}>
              {t('queryBuilder:table.expand.guide.table.column.required')}
            </TableCell>
            <TableCell align="center" sx={{ fontFamily: 'iran-yekan' }}>
              {t('queryBuilder:table.expand.guide.table.column.responseType')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>{children}</TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

GuideItem.InputItem = ({ children }) => (
  <TableCell sx={{ fontFamily: 'iran-yekan' }} align="center">
    {children}
  </TableCell>
);

GuideItem.Url = ({ children, domain }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(domain + children);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <Alert
      severity="info"
      sx={{ direction: 'ltr', fontFamily: 'Roboto Mono', position: 'relative' }}
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%', fontFamily: 'iran-yekan' }}
        >
          {t('queryBuilder:table.expand.guide.table.feedback.copied')}
        </Alert>
      </Snackbar>
      {domain}
      {children}

      <Button
        sx={{ position: 'absolute', right: '0', top: '0' }}
        onClick={handleCopyUrl}
      >
        <ContentCopyIcon />
      </Button>
    </Alert>
  );
};

export default GuideItem;
