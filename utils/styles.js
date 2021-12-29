import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
      navbar: {
        backgroundColor: '#203040',
        '& a': {
          color: '#ffffff',
          marginLeft: 10,
        },
      },
      brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
      },
      main: {
        minHeight: '80vh',
      },
      grow: {
        flexGrow: 1,
      },
      footer: {
        marginTop: 10,
        textAlign: 'center',
      },
      section: {
        marginTop: 10,
        marginBottom: 10
      },
      warning: {
        backgroungColor: '#f6b93b',
        '& a': {
          color: '#ffffff',
          marginLeft: 10,
        },
      }
})

export default useStyles