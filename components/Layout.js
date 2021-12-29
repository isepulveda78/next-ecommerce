import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core'
import useStyles from '../utils/styles'
import NextLink from 'next/link'

export default function Layout({title, description, children}) {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>{title ? `${title} - E-Commerce` : 'E-commerce'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref><Link><Typography className={classes.brand}>ecommerce</Typography></Link></NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>
                    All right reserved. Ecommerce
                </Typography>
            </footer>
        </div>
    )
}
