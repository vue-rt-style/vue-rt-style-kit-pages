cd src/
ln -s ../../vue-rt-style-kit-atoms atoms
ln -s ../../vue-rt-style-kit-molecules molecules
ln -s ../../vue-rt-style-kit-icons icons
mkdir projectsJsons
cd projectsJsons
ln -s ../../../vue-rt-style-kit-atoms/package.json atoms.json
ln -s ../../../vue-rt-style-kit-molecules/package.json molecules.json
ln -s ../../../vue-rt-style-kit-icons/package.json icons.json
cd ../../
