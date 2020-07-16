cd ./src/
ln -s ../../vue-rt-style-kit-atoms/src/ ./atoms
ln -s ../../vue-rt-style-kit-molecules/src/ ./molecules
ln -s ../../vue-rt-style-kit-icons/src/ ./icons
ln -s ../../vue-rt-style-kit-aks/src/ ./aks
mkdir projectsJsons
cd ./projectsJsons
ln -s ../../../vue-rt-style-kit-atoms/package.json ./atoms.json
ln -s ../../../vue-rt-style-kit-molecules/package.json ./molecules.json
ln -s ../../../vue-rt-style-kit-icons/package.json ./icons.json
ln -s ../../../vue-rt-style-kit-aks/package.json ./aks.json
cd ../../
