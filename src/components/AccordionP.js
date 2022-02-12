import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

import styles from './AccordionP.module.css';

export default function AccordionP() {
  return (
    <Box>
      <Container>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <strong>Cabelo</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div className={styles.prices}>
                      <span>Corte de Cabelo</span>
                      <div>
                        R$25,00
                        <button className={styles.button} variant="contained">
                          <a href="/reserva">Reservar</a>
                        </button>
                      </div>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Corte a sua maneira ou permita sugerir um corte que mais se
                    enquadre ao seu rosto.
                  </Typography>
                </AccordionDetails>
              </Accordion>{' '}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div className={styles.prices}>
                      <span>Corte Degradê</span>
                      <div>
                        R$35,00
                        <button className={styles.button} variant="contained">
                          Reservar
                        </button>
                      </div>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>{' '}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div className={styles.prices}>
                      <span>Raspar</span>
                      <div>
                        R$15,00
                        <button className={styles.button} variant="contained">
                          Reservar
                        </button>
                      </div>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <div className={styles.prices}>
                <strong>Barba</strong>
                <div>
                  R$20,00
                  <button className={styles.button} variant="contained">
                    Reservar
                  </button>
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Entre toalhas quentes e uma boa e velha massagem facial, os
              melhores cremes e espumas preparam o rosto para as navalhas
              descartáveis, claro. Assim garantimos sempre a higiene e sua
              saúde.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className={styles.prices}>
                <strong>Sobrancelha</strong>
                <div>
                  R$15,00
                  <button className={styles.button} variant="contained">
                    Reservar
                  </button>
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';

// import styles from './ScheduleAnot.module.css';
// import Date from './Date';

// import { compareAsc, format } from 'date-fns';

// const dateNumber = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31,
// ];

// const dateHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ScheduleAnot() {

//   return (
//     <>
//       <h1>Agenda</h1>
//       <Box sx={{ width: '100%' }}>
//         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//           {dateNumber.map(number => (
//             <Grid item xs={3}>
//               <Item>{number}</Item>
//               {dateHours.map(hours => (
//                 <Grid item xs={3}>
//                   <Item>{hours}</Item>
//                 </Grid>
//               ))}
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// }
