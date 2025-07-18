<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carlos Augusto - Dev Profile</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #0d1117;
            color: #e6edf3;
            margin: 0;
            padding: 16px;
            line-height: 1.5;
        }
        .container {
            max-width: 896px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .top-section {
            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 24px;
            min-height: 300px; /* Fixed height to match image proportion */
        }
        .bottom-section {
            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 24px;
            min-height: 400px; /* Fixed height to match image proportion */
        }
        .bullet-points {
            padding-left: 20px;
            margin: 0;
        }
        .bullet-points li {
            margin-bottom: 12px;
            list-style-type: '- ';
            padding-left: 4px;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin: 12px 0;
        }
        .skill {
            background-color: #238636;
            color: white;
            padding: 2px 8px;
            border-radius: 2em;
            font-size: 0.85rem;
            white-space: nowrap;
        }
        .portfolio-link {
            color: #2f81f7;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }
        .commit-info {
            color: #7d8590;
            font-size: 0.85rem;
            margin-top: 16px;
        }
        .stats-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: #e6edf3;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 24px;
        }
        .stat-item {
            background-color: #0d1117;
            border: 1px solid #30363d;
            border-radius: 6px;
            padding: 12px;
        }
        .stat-value {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2f81f7;
            margin-top: 4px;
        }
        .languages-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: #e6edf3;
        }
        .language-item {
            margin-bottom: 8px;
        }
        .language-name {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
            font-size: 0.9rem;
        }
        .language-bar {
            height: 8px;
            background-color: #238636;
            border-radius: 4px;
        }
        .additional-skills {
            margin-top: 24px;
            font-size: 0.9rem;
            color: #7d8590;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        /* Specific adjustments to match the image exactly */
        .bullet-points li:nth-child(3) {
            margin-bottom: 0;
        }
        .skills {
            margin-top: 8px;
        } 
        .portfolio-link {
            margin-left: -20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-section">
            <ul class="bullet-points">
                <li>I'm a computer engineer Front end developer. I from Brasil BR</li>
                <li>I'm here to learn and my interests are programming and data reading</li>
                <li>I am working: 
                    <div class="skills">
                        <span class="skill">NodeJS</span>
                        <span class="skill">JavaScript</span>
                        <span class="skill">CSS3</span>
                        <span class="skill">HTML5</span>
                        <span class="skill">Power BI</span>
                        <span class="skill">Laravel</span>
                        <span class="skill">Godot</span>
                        <span class="skill">Flutter</span>
                        <span class="skill">PHP</span>
                        <span class="skill">Python</span>
                        <span class="skill">React</span>
                    </div>
                </li>
            </ul>
            
            <p style="margin-left: 20px;">Meu Portfolio: <a href="#" class="portfolio-link">💬 MY PORTFOLIO</a></p>
            
            <div class="commit-info">Commits (UTC +0.00)</div>
        </div>
        
        <div class="bottom-section">
            <div class="stats-title">Carlos Augusto Diniz Filho's GitHub Stats</div>
            
            <div class="stats-grid">
                <div class="stat-item">
                    <div>Total Stars Earned:</div>
                    <div class="stat-value">7</div>
                </div>
                <div class="stat-item">
                    <div>Total Commits (2025):</div>
                    <div class="stat-value">0</div>
                </div>
                <div class="stat-item">
                    <div>Total PRs:</div>
                    <div class="stat-value">0</div>
                </div>
                <div class="stat-item">
                    <div>Total Issues:</div>
                    <div class="stat-value">1</div>
                </div>
                <div class="stat-item">
                    <div>Contributed to (last year):</div>
                    <div class="stat-value">0</div>
                </div>
            </div>
            
            <div class="languages-title">Most Used Languages</div>
            
            <div class="language-item">
                <div class="language-name">
                    <span>PHP</span>
                    <span>39.31%</span>
                </div>
                <div class="language-bar" style="width: 39.31%"></div>
            </div>
            
            <div class="language-item">
                <div class="language-name">
                    <span>TypeScript</span>
                    <span>6.83%</span>
                </div>
                <div class="language-bar" style="width: 6.83%"></div>
            </div>
            
            <div class="language-item">
                <div class="language-name">
                    <span>C#</span>
                    <span>35.73%</span>
                </div>
                <div class="language-bar" style="width: 35.73%"></div>
            </div>
            
            <div class="language-item">
                <div class="language-name">
                    <span>HTML</span>
                    <span>4.17%</span>
                </div>
                <div class="language-bar" style="width: 4.17%"></div>
            </div>
            
            <div class="language-item">
                <div class="language-name">
                    <span>JavaScript</span>
                    <span>10.11%</span>
                </div>
                <div class="language-bar" style="width: 10.11%"></div>
            </div>
            
            <div class="language-item">
                <div class="language-name">
                    <span>Twig</span>
                    <span>3.85%</span>
                </div>
                <div class="language-bar" style="width: 3.85%"></div>
            </div>
            
            <div class="additional-skills">
                <span>Python</span>
                <span>PHP</span>
                <span>Quasar</span>
                <span>TypeScript</span>
                <span>Arch Linux</span>
                <span>CSS3</span>
                <span>React</span>
                <span>Vue.js</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>HTML5</span>
            </div>
        </div>
    </div>
</body>
</html>
