import styles from './styles.module.scss';

export function Header() {
    const currentDate = new Date().toLocaleDateString()


    return(
        <header className={styles.headerConteiner}>
            <img src="/logo.svg" alt="Podcastr"/>
            <p>O melhor para você ouvir, sempre.</p>
            <span>Qui, 8 Abril</span>            
        </header>
    )
}