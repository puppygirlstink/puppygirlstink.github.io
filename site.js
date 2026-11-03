// shared header / sidebar / footer for every page
// edit the nav or the "updates" list here and it changes everywhere

const NAV_TOP = [
    ['me', 'me'],
    ['socials', 'socials'],
    ['music', 'music'],
    ['media', 'media'],
];

const NAV_BOTTOM = [
    ['gifts', 'gimmie stuff..'],
    ['rack', 'server rack'],
    ['mailto:lexi@puppybit.ch', 'email'],
];

// newest first ~ add a line when you change something
// the last bit is the commit hash it links to (copy it from github, the short one works too)
const UPDATES = [
    ['26/11/03', 'site got a new look!! ☀', 'd7aa99a'],
    ['26/11/03', 'added email + changed twitter username', 'bde559c'],
    ['26/05/06', 'socials rearranged', 'fb85bc8'],
    ['26/04/21', 'server rack page: 2 more servers + pricing', '439c2e7'],
    ['26/04/18', 'server rack is on the floor now', 'e6d3ed3'],
];

// clicking an update opens that commit on github (or the whole history if there's no hash)
const REPO_URL = 'https://github.com/puppygirlstink/puppygirlstink.github.io';
const commitUrl = (sha) => (sha ? `${REPO_URL}/commit/${sha}` : `${REPO_URL}/commits/main`);

const here = location.pathname.split('/').pop().replace('.html', '') || 'index';

function navLinks(list) {
    return list
        .map(([href, label]) => `<a href="${href}"${href === here ? ' class="here"' : ''}>${label}</a>`)
        .join('');
}

document.getElementById('header').innerHTML = `
    <a id="logo" href="./" title="home">
        <span class="logo-small">puppy girl</span>
        <span class="logo-big">puppygirl<span>stink</span></span>
    </a>
    <nav id="nav">
        <div class="nav-row">${navLinks(NAV_TOP)}</div>
        <div class="nav-row">${navLinks(NAV_BOTTOM)}</div>
    </nav>
    <a id="top-btn" href="./" title="home">TOP</a>
`;

document.getElementById('side').innerHTML = `
    <div class="note">
        <div class="pfp-row">
            <img class="pfp" src="images/pfp.webp" alt="lexi">
            <div>
                <p class="note-title">hi!!</p>
                <p class="small">just a girl</p>
            </div>
        </div>
    </div>
    <div class="note blue tilt">
        <p class="small">my current time (london)</p>
        <p class="clock" id="time">--:--:--</p>
    </div>
    <div class="updates-head">updates</div>
    <ul class="updates">
        ${UPDATES.map(([d, t, sha]) => `<li><a href="${commitUrl(sha)}" target="_blank" title="see this on github">${t} <span class="date">[${d}]</span></a></li>`).join('')}
    </ul>
`;

document.getElementById('footer').innerHTML =
    'puppygirlstink ~ <a href="mailto:lexi@puppybit.ch">lexi@puppybit.ch</a> ~ <a href="old/">old site</a>';

function updateTime() {
    const el = document.getElementById('time');
    if (!el) return;
    el.textContent = new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

setInterval(updateTime, 1000);
updateTime();
