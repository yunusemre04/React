import { Skeleton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'


function SkeletonCom() {
    let item = '';
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);

        }, 2000)
    }, [])

    return (
        <div>
            <div className='ms-2 h4'>Skeloton</div>
            <Stack spacing={1}>

                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                {
                    loading ?
                        (
                            <Skeleton variant="rectangular" animation='wave' width={210} height={118} />
                        ) : (
                            <img
                                style={{
                                    width: 210,
                                    height: 118,
                                }}

                                src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=826&t=st=1724253122~exp=1724253722~hmac=ffd90f86909c50bc3d9309a220b6651af8aa01fbca15d60c36b78c50ebe76db9'
                            />
                        )
                }
            </Stack>

        </div>
    )
}

export default SkeletonCom