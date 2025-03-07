import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '@mui/material/Slider';
import { TextField, Typography, Box } from '@mui/material';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryTooltip, VictoryStack, VictoryAxis } from 'victory';


const IncomeSimulator = () => {
  const { t } = useTranslation();
  const [fanbase, setFanbase] = useState(36000);
  const [streams, setStreams] = useState(25000);
  const [engagement, setEngagement] = useState(5);
  const [artysRevenue, setArtysRevenue] = useState(0);
  const [spotifyRevenue, setSpotifyRevenue] = useState(0);
  const [royaltiesArtys, setRoyaltiesArtys] = useState(0);
  const [royaltiesTM, setRoyaltiesTM] = useState(0);

  useEffect(() => {
    const calculatedArtysRevenue = (fanbase * (engagement / 100) * 3) + (streams * 0.0066);
    const calculatedSpotifyRevenue = streams * 0.004;
    const calculatedRoyaltiesArtys = streams * 0.0066;
    const calculatedRoyaltiesTM = (fanbase * (engagement / 100) * 3);


    setArtysRevenue(calculatedArtysRevenue.toFixed(2));
    setSpotifyRevenue(calculatedSpotifyRevenue.toFixed(2));
    setRoyaltiesArtys(calculatedRoyaltiesArtys.toFixed(2));
    setRoyaltiesTM(calculatedRoyaltiesTM.toFixed(2));
  }, [fanbase, streams, engagement]);

  const formatNumber = (num) => {
    const roundedUpNum = Math.ceil(num);
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(roundedUpNum);
  };

  const handleFanbaseChange = (event, value) => {
    setFanbase(Math.round(Math.exp(value)));
  };

  const handleFanbaseInputChange = (e) => {
    const newValue = Number(e.target.value.replace(/\D/g, ''));
    setFanbase(newValue);
  };

  const handleStreamsChange = (event, value) => {
    setStreams(Math.round(Math.exp(value)));
  };

  const handleStreamsInputChange = (e) => {
    const newValue = Number(e.target.value.replace(/\D/g, ''));
    setStreams(newValue);
  };

  const logScale = (value) => {
    return Math.log(value);
  };

  const engagementScale = (value) => {
    return Math.log(value + 1) / Math.log(101);
  };

  const engagementInverseScale = (value) => {
    return Math.exp(value * Math.log(101)) - 1;
  };

  const handleEngagementChange = (event, value) => {
    setEngagement(Number(engagementInverseScale(value).toFixed(1)));
  };

  const handleEngagementInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setEngagement(newValue.toFixed(1));
    }
  };

  const data = [
    { platform: 'Royalties Artys', revenue: parseFloat(royaltiesArtys), color: '#000000' },
    { platform: 'Royaltips Artys', revenue: parseFloat(royaltiesTM), color: '#F00057' },
    { platform: 'Spotify', revenue: parseFloat(spotifyRevenue), color: '#08b3b8' },
  ];

  return (
    <div className='px-8 pt-8'>
        {/*<Typography variant="h4" align="center" gutterBottom>
          Simulateur de revenus pour artistes
        </Typography>*/}
        <Typography variant="body1" align="left" gutterBottom>
            <span><b>Note :</b>{t('IncomeSection.description')}</span> :
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ '& > :not(style)': { m: 2 } }}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:divide-x divide-slate-400'>
            <div className='col-span-1 md:col-span-2 pr-10'>
              <div className='mt-2'>
                <div className='font-semibold'>
                  {t('IncomeSection.fanbaseSize')}
                </div>
                <Slider
                  label="Fanbase Size"
                  min={logScale(1)}
                  max={logScale(100000000)}
                  step={0.01}
                  value={logScale(fanbase)}
                  onChange={handleFanbaseChange}
                  valueLabelDisplay="off"
                  sx={{ mb: 2, '& .MuiSlider-thumb': { color: '#218380' }, '& .MuiSlider-track': { color: '#218380' }, '& .MuiSlider-rail': { color: '##b8b8b8' } }}
                />
                <TextField
                  label="Fanbase Size"
                  type="text"
                  value={formatNumber(fanbase)}
                  onChange={handleFanbaseInputChange}
                  fullWidth
                />
              </div>

              <div className='mt-6'>
                <div className='font-semibold'>
                 {t('IncomeSection.streamNumberPerMonth')}
                </div>
                <Slider
                  label="Streams per month"
                  min={logScale(1)}
                  max={logScale(100000000)}
                  step={0.01}
                  value={logScale(streams)}
                  onChange={handleStreamsChange}
                  valueLabelDisplay="off"
                  sx={{ mb: 2, '& .MuiSlider-thumb': { color: '#218380' }, '& .MuiSlider-track': { color: '#218380' }, '& .MuiSlider-rail': { color: '##b8b8b8' } }}
                />
                <TextField
                  label="Streams per month"
                  type="text"
                  value={formatNumber(streams)}
                  onChange={handleStreamsInputChange}
                  fullWidth
                />
              </div>

              <div className='mt-6'>
                <div className='font-semibold'>
                    {t('IncomeSection.engagementRate')} (%)
                </div>
                <Slider
                  label="Engagement Rate"
                  min={0}
                  max={Math.log(101) / Math.log(101)}
                  step={0.01}
                  value={engagementScale(engagement)}
                  onChange={handleEngagementChange}
                  valueLabelDisplay="off"
                  sx={{ mb: 2, '& .MuiSlider-thumb': { color: '#218380' }, '& .MuiSlider-track': { color: '#218380' }, '& .MuiSlider-rail': { color: '##b8b8b8' } }}
                />
                <TextField
                  label="Engagement Rate"
                  type="number"
                  value={engagement}
                  onChange={handleEngagementInputChange}
                  fullWidth
                  step="0.1"
                />
              </div>
            </div>
            <div className='col-span-1 flex flex-col justify-center content-center'>
              <div className='flex justify-center content-center'>
                <p className='font-extrabold'>
                  <span className='text-[#218380] text-2xl'><span className={'text-5xl '}>{formatNumber(parseFloat(artysRevenue))}</span> €</span>/ {t('IncomeSection.frequency')}
                </p>
              </div>
            </div>
          </div>

          <div className='flex justify-center pb-10 !mt-12'>
            <h3 className='font-bold text-4xl'>
                {t('IncomeSection.result')}
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-6'>
            <div className='md:col-span-3'>
              <VictoryChart 
                domainPadding={{ x: [80, 90], y: 20 }} // Adjusting domain padding to add space
                theme={VictoryTheme.material}
                padding={{ left: 70, bottom: 50, right: 30 }}
                width={420}
                height={260}>
                <VictoryAxis
                  style={{
                    ticks: { stroke: 'none' },
                    grid: { stroke: 'transparent' }
                  }}
                  standalone={false}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    ticks: { stroke: 'none' },
                    grid: { stroke: 'transparent' }
                  }}
                  standalone={false}
                />

                <VictoryBar
                  data={data.filter(d => d.platform === 'Spotify')}
                  x="platform"
                  y="revenue"
                  labels={({ datum }) => `${formatNumber(parseFloat(spotifyRevenue))} €`}
                  labelComponent={<VictoryTooltip active={true}
                    flyoutStyle={{
                      fill: '#2f2c2b',
                      stroke: '#2f2c2b',
                    }}
                    style={{ fill: '#fff', fontSize: 15}}
                    flyoutPadding={{ top: 10, bottom: 10, left: 14, right: 14 }}
                    dy={-5}

                  />}
                  cornerRadius={{ top: 25 }}
                  style={{
                    data: {
                      fill: '#2f2c2b',
                      width: 50
                    },
                    labels: {
                      fontSize: 15,
                      fill: "#fff"
                    }
                  }}
                />

                <VictoryStack>
                  <VictoryBar
                    data={[{ platform: 'Artys', revenue: parseFloat(royaltiesArtys) }]}
                    x="platform"
                    y="revenue"                    
                    style={{
                      data: {
                        fill: '#2f2c2b',
                        width: 50
                      },
                      labels: {
                        fontSize: 15,
                        fill: "#fff",
                      }
                    }}
                  />
                  <VictoryBar
                    data={[{ platform: 'Artys', revenue: parseFloat(royaltiesTM) }]}
                    x="platform"
                    y="revenue"
                    labels={({ datum }) => `${formatNumber(parseFloat(artysRevenue))} €`}
                    labelComponent={<VictoryTooltip active={true}
                      flyoutStyle={{
                        fill: '#218380',
                        stroke: '#218380',
                      }}
                      style={{ fill: '#fff', fontSize: 15}}
                      flyoutPadding={{ top: 10, bottom: 10, left: 14, right: 14 }}
                      dy={-5}
                    />}
                    cornerRadius={{ top: 25 }}
                    style={{
                      data: {
                        fill: '#F00057',
                        width: 50
                      },
                      labels: {
                        fontSize: 15,
                        fill: "#fff"
                      }
                    }}
                  />
                </VictoryStack>
              </VictoryChart>
            </div>
            <div className='col-span-1 md:col-span-2 md:col-end-7 flex content-center justify-center'>
              <div className='flex flex-col content-center justify-center w-full'>
                <div className='bg-white p-4 border rounded-lg border-gray-200 shadow-md mb-2'>
                  <p className='text-gray-800 text-2xl font-bold'>
                    <span className='text-sm'><span className={'text-[#2f2c2b] '}>&#9679;</span> Royalties</span>
                  </p>
                  <p className='font-bold text-right'><span className='text-3xl'>{formatNumber(parseFloat(royaltiesArtys))}</span>€ / {t('IncomeSection.frequency')}</p>
                </div>
                <div className='bg-white p-4 border rounded-lg border-gray-200 shadow-md w-full'>
                  <p className='text-gray-800 text-2xl font-bold'>
                    <span className='text-sm'><span className='text-[#F00057] text-sm'>&#9679;</span> RoyalTips™</span>
                  </p>
                  <p className='font-bold text-right'><span className='text-[#F00057]'><span className='text-3xl'>{formatNumber(parseFloat(royaltiesTM))}</span>€</span> / {t('IncomeSection.frequency')}</p>
                </div>
              </div>
            </div>
          </div>

        </Box>
    </div>
  );
};

export default IncomeSimulator;