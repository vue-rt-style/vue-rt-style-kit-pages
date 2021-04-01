import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const local_dirname = path.join(__dirname, '..')


export default {
    'atoms': path.join(local_dirname, 'src', 'atoms'),
    'molecules': path.join(local_dirname, 'src', 'molecules'),
    'icons': path.join(local_dirname, 'src', 'icons'),
    'atomsJson': path.join(local_dirname, 'src', 'projectsJsons', 'atoms.json'),
    'moleculesJson': path.join(local_dirname, 'src', 'projectsJsons', 'molecules.json'),
    'iconsJson': path.join(local_dirname, 'src', 'projectsJsons', 'icons.json'),
}