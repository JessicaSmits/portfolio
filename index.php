<?php include "template-parts/head.php"?>

<body>
    <header>
        <img src="assets/header-about.jpg" alt="tree with blossom" class="hero">
        
        <nav class="burger-menu">
            <div class="burger-icon">
                <div class="bar-group">
                    <div class="bar" id="bar1"></div>
                    <div class="bar" id="bar2"></div>
                    <div class="bar" id="bar3"></div>
                </div>
            </div>
            <div class="overlay">
                <ul>
                    <li class="highlight"><a href="index.php">About</a></li>
                    <li class="middle-nav"><a href="projects.php">Projects</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
                <ul class="icons">
                    <li><img src="assets/icons/icon-github.svg" alt="github icon"></li>
                    <li><img src="assets/icons/icon-linkedin.svg" alt="linkedin icon"></li>
                    <li><img src="assets/icons/Icon feather-mail.svg" alt="mail icon"></li>
                    <li><img src="assets/icons/icon-instagram.svg" alt="instagram icon"></li>
                </ul>
            </div>
        </nav>

    </header>

    <nav class="standard">
        <ul>
            <li class="highlight"><a href="index.php">About</a></li>
            <li class="middle-nav" ><a href="projects.php">Projects</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" width="1089.5" height="2" viewBox="0 0 1089.5 2">
            <line id="Line_3" data-name="Line 3" x2="1089.5" transform="translate(0 1)" fill="none" stroke="#e6e6e6" stroke-width="2"/>
        </svg>
    </nav>

    <main>

        <div class="title">
            <h1>about</h1>
            <h1 class="mirror">about</h1>
        </div>

        <section class="about">
    
            <img src="assets/pic-me.jpg" alt="portrait of me" class="portrait">
      
            <div class="general-info">
                <h2>Nice to meet you!</h2>
                <p class="bottom">My name is <span class="highlight">Jessica Smits</span>, I'm 22 years old and currently I'm studying to become a designer in the broadest sense of the word. I'm learning new things every day and I think you never stop learning as a designer and as a person. So far I love the creative programming the most.</p>
                <div class="container">
                    <p>name</p>
                    <h3>Jessica</h3>
                </div>
                <div class="container" id="age">
                    <p>age</p>
                    <h3>
                        <?php 
                            $dateOfBirth = "16-08-1998";
                            $today = date("Y-m-d");
                            $diff = date_diff(date_create($dateOfBirth), date_create($today));
                            echo $diff->format('%y');
                        ?>  
                    </h3>
                </div>
                <div class="bottom container" id="last-container">
                    <p>country</p>
                    <h3>Netherlands</h3>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div id="removable-clear" class="clear"></div>
            <div class="general-info" id="languages">
                <p>languages</p>
                <h3 class="bottom">Dutch - Native<br>English - Advanced<br>German - Beginner</h3>
            </div>
            <div class="general-info" id="education">
                <p>education</p>
                <h3>2nd year student Communication and Multimedia Design at Zuyd Hogeschool 2020 - now</h3>
            </div>
            <div class="clear"></div>
        </section>

        <div class="title">
            <h1>skills</h1>
            <h1 class="mirror">skills</h1>
        </div>

        <section class="skills">
            <div class="apps">
                <h2>Apps</h2>
                <div class="container">
                    <img src="assets/icons/icon-xd.svg" alt="adobe xd icon">
                    <p>Adobe XD<br>Proficient - 80%</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-visual-studio-code.svg" alt="visual studio code icon">
                    <p>Visual Studio Code<br>Proficient - 80%</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-premiere.svg" alt="premiere pro icon">
                    <p class="last">Adobe Premiere Pro<br>Proficient - 60%</p>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
                <div class="container">
                    <img src="assets/icons/icon-audition.svg" alt="audition icon">
                    <p>Adobe Audition<br>Proficient - 50%</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-illustrator.svg" alt="illustrator icon">
                    <p>Adobe Illustrator<br>Proficient - 40%</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-indesign.svg" alt="indesign icon">
                    <p class="last">Adobe InDesign<br>Proficient - 20%</p>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
                <div class="container">
                    <img src="assets/icons/icon-photoshop.svg" alt="photoshop icon">
                    <p>Adobe Photoshop<br>Proficient - 20%</p>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="know-how">
                <h2>Know-how</h2>
                <div class="container">
                    <img src="assets/icons/icon-webdev.svg" alt="web development icon">
                    <p>Web development</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-webdesign.svg" alt="web design icon">
                    <p>Web design</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-graphic-design.svg" alt="graphic design icon">
                    <p class="last">Graphic design</p>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="code-languages">
                <h2>Code languages</h2>
                <div class="container">
                    <img src="assets/icons/icon-html-css.svg" alt="code icon">
                    <p>HTML 5, CSS 3 and PHP</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-javascript.svg" alt="javascript icon">
                    <p id="javascript-text">JavaScript:<br>- p5.js<br>- jQuery & jQueryUI</p>
                    <div class="clear"></div>
                </div>
                <div class="container">
                    <img src="assets/icons/icon-java-processing.svg" alt="java icon">
                    <p class="last">Java:<br>- Processing</p>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
            </div>
        </section>
    </main>

<?php include "template-parts/footer.php"?>