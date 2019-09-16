const PropertyViewProvider = require('../misc/property_view_provider');
const Fluent = require('./fluent');

class FolderFluent extends Fluent {
    add(target, propName, options) {
        const propView = PropertyViewProvider.provide(target, propName, options);
        this.getView().addSubview(propView);
    }

    /**
     * Open a folder.
     * @return {FolderFluent}
     */
    open() {
        const folderView = this.getView();
        folderView.setExpanded(true, false);
        return this;
    }

    /**
     * Close a folder.
     * @return {FolderFluent}
     */
    close() {
        const folderView = this.getView();
        folderView.setExpanded(false, false);
        return this;
    }
}

module.exports = FolderFluent;