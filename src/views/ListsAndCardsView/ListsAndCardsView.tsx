// views/ListsAndCardsView.tsx
import React, {ComponentProps} from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography} from '@mui/material';
import TitledCard from "@/views/TitledCard";

type CenteredBoxProps = Omit<ComponentProps<typeof Box>, 'display' | 'justifyContent' | 'alignItems'>

function CenteredBox({children, ...BoxProps}: CenteredBoxProps) {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} {...BoxProps}>
            {children}
        </Box>
    )
}

function BasicCard() {
    return (
        <Grid container spacing={5} display={'flex'} justifyContent={'center'}>
            <Grid item>
                <Card sx={{maxWidth: "350px"}} variant={'elevation'}>
                    <CardContent>
                        <Typography variant={'h6'}>Basic Card - Elevation</Typography>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{maxWidth: "350px"}} variant={'outlined'}>
                    <CardContent>
                        <Typography variant={'h6'}>Basic Card - Outlined</Typography>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

const CardWithHeader = () => {
    return (
        <Grid container spacing={5} display={'flex'} justifyContent={'center'}>
            <Grid item>
                <Card sx={{maxWidth: "350px", height: "100%"}}>
                    <CardHeader
                        title={"Header"}/>
                    <CardContent>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{maxWidth: "350px", height: "100%"}}>
                    <CardHeader
                        title={
                            "Header"
                        }
                        subheader={
                            "Subheader"
                        }
                    />
                    <CardContent>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{maxWidth: "350px", height: "100%"}}>
                    <CardHeader
                        title={
                            "Header"
                        }
                        subheader={
                            "Subheader"
                        }
                        avatar={
                            <Avatar>AB</Avatar>
                        }
                    />
                    <CardContent>
                        <Typography variant={'body1'}>
                            Adding an Avatar causes the Header to become smaller
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{maxWidth: "350px", height: "100%"}}>
                    <CardHeader
                        title={
                            <Typography paragraph fontSize={'1em'} fontWeight={'bold'}
                                        sx={{padding: 0, margin: 0, marginBottom: -0.5}}>Header</Typography>
                        }
                        subheader={
                            <>
                                <Typography paragraph fontSize={'1em'} fontWeight={'normal'} color={'black'}
                                            sx={{padding: 0, margin: 0, marginBottom: -0.5}}>Subheader</Typography>
                                <Typography paragraph fontSize={'1em'} fontWeight={'normal'}
                                            sx={{padding: 0, margin: 0, marginBottom: -0.5}}>Subheader</Typography>
                            </>
                        }
                        avatar={
                            <Avatar>AB</Avatar>
                        }
                    />
                    <CardContent>
                        <Typography variant={'body1'}>
                            Cards require information hierarchy to be effective. The CardHeader component provides a
                            flexible and expressive approach to this problem.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

const CardWithMedia = () => {
    return (
        <Grid container spacing={5} display={'flex'} justifyContent={'center'}>
            <Grid item xs={12}>
                <Card sx={{maxWidth: "350px", width:"100%", height: "100%"}}>
                    <CardMedia sx={{backgroundColor: "navy", height: "50px", marginBottom: "-25px"}}/>
                    <CardHeader
                        sx={{paddingY: 0, display: "flex", flexDirection: "column", alignItems: "flex-start"}}
                        title={
                            <Typography paragraph fontSize={'1em'} fontWeight={'bold'}
                                        sx={{padding: 0, margin: 0, marginBottom: -0.5}}>Header</Typography>
                        }
                        subheader={
                            <>
                                <Typography paragraph fontSize={'1em'} fontWeight={'normal'} color={'black'}
                                            sx={{padding: 0, margin: 0, marginBottom: -0.4}}>Subheader</Typography>
                                <Typography paragraph fontSize={'1em'} fontWeight={'normal'}
                                            sx={{padding: 0, margin: 0, marginBottom: -0.4}}>Subheader</Typography>
                            </>
                        }
                        avatar={
                            <Avatar sx={{border: "2px solid white"}}>AB</Avatar>
                        }
                    />
                    <CardContent>
                        <Typography variant={'body1'}>

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

const ListsAndCardsView = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Lists and Cards
            </Typography>
            <Typography paragraph>
                The Card is a component that displays content and actions on a single topic. They should be easy to scan
                for
                relevant and actionable information. Elements, like text and images, should be placed on them in a way
                that
                clearly indicates hierarchy.
            </Typography>


            <TitledCard title={'Basic Card'}>
                <CenteredBox>
                    <BasicCard/>
                </CenteredBox>
            </TitledCard>

            <TitledCard title={'Card with Header'}>
                <CenteredBox>
                    <CardWithHeader/>
                </CenteredBox>
            </TitledCard>

            <TitledCard
                title={'Card with CardMedia'}
                description={`
                The CardMedia component makes it possible to insert an image or just a background color that
                fills the card up to the edge.
                `}
            >
                <CenteredBox>
                    <CardWithMedia/>
                </CenteredBox>
            </TitledCard>

        </div>
    );
};

export default ListsAndCardsView;
