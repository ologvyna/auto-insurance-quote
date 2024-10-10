import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        growth: "#26AEAF",
    },
    components: {
        Heading: {
            baseStyle: {},
            variants: {
                socotra: {
                    fontSize: '28px',
                    mt: '45px',
                    mb: '45px',
                    textAlign: 'center'
                }
            },
            defaultProps: {
                variant: 'socotra'
            }
        },
        FormLabel: {
            variants: {
                socotra: {
                    mt: '16px',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#1C2024'
                }
            },
            defaultProps: {
                variant: 'socotra'
            }
        },
        FormControl: {
            variants: {
                socotra: {
                    pb: '16px'
                }
            },
            defaultProps: {
                variant: 'socotra'
            }
        },
        Input: {
            defaultProps: {
                size: 'sm'
            }
        },
        Select: {
            defaultProps: {
                size: 'sm'
            }
        }
    }
}, withDefaultColorScheme({ colorScheme: 'growth', components: ['Stepper'] }));

export default theme;