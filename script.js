// ==========================================
// 1. INJEÇÃO DE ESTILOS (CSS)
// ==========================================
const estilizacao = document.createElement('style');
estilizacao.textContent = `
    :root {
        --verde-escuro: #1b4d3e;
        --verde-claro: #2c6b56;
        --laranja-agro: #e67e22;
        --bege-fundo: #f4f6f4;
        --texto-escuro: #2c3e50;
        --branco: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
        background-color: var(--bege-fundo);
        color: var(--texto-escuro);
        line-height: 1.6;
    }

    header {
        background-color: var(--verde-escuro);
        color: var(--branco);
        padding: 1rem 2rem;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo h1 { font-size: 1.8rem; font-weight: bold; letter-spacing: 1px; }
    .logo span { color: var(--laranja-agro); }

    nav ul { display: flex; list-style: none; gap: 2rem; }
    nav a { color: var(--branco); text-decoration: none; font-weight: 500; transition: color 0.3s; }
    nav a:hover { color: var(--laranja-agro); }

    .hero {
        background: linear-gradient(rgba(27, 77, 62, 0.7), rgba(27, 77, 62, 0.5)), 
                    url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920') no-repeat center center/cover;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--branco);
        padding: 0 1rem;
    }

    .hero-content h2 { font-size: 3rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
    .hero-content p { font-size: 1.2rem; max-width: 600px; margin: 0 auto 2rem auto; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }

    .btn-principal {
        background-color: var(--laranja-agro);
        color: var(--branco);
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.3s;
        text-decoration: none;
        display: inline-block;
    }
    .btn-principal:hover { background-color: #d35400; }

    .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
    .section-title { text-align: center; color: var(--verde-escuro); font-size: 2.2rem; margin-bottom: 3rem; position: relative; }
    .section-title::after {
        content: ''; display: block; width: 60px; height: 4px; background-color: var(--laranja-agro); margin: 10px auto 0 auto; border-radius: 2px;
    }

    .grid-pilares { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .card {
        background-color: var(--branco); padding: 2.5rem 2rem; border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center; transition: transform 0.3s; border-top: 5px solid var(--verde-claro);
    }
    .card:hover { transform: translateY(-5px); }
    .card h3 { color: var(--verde-escuro); margin-bottom: 1rem; font-size: 1.4rem; }

    .sobre-container { display: flex; gap: 4rem; align-items: center; flex-wrap: wrap; }
    .sobre-texto { flex: 1; min-width: 300px; }
    .sobre-texto p { margin-bottom: 1.5rem; font-size: 1.1rem; }

    .tabela-cronograma { width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--branco); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
    .tabela-cronograma th, .tabela-cron
