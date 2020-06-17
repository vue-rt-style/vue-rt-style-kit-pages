const path = require('path');
const local_dirname = path.join(__dirname,'..');

module.exports = {
    'atoms': path.join(local_dirname, 'src', 'atoms'),
    'molecules': path.join(local_dirname, 'src', 'molecules'),
    'icons': path.join(local_dirname, 'src', 'icons'),
    'atomsJson': path.join(local_dirname, 'src', 'projectsJsons', 'atoms.json'),
    'moleculesJson': path.join(local_dirname, 'src', 'projectsJsons', 'molecules.json'),
    'iconsJson': path.join(local_dirname, 'src', 'projectsJsons', 'icons.json'),
}