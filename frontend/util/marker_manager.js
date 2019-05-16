class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(entities) {
        const entitiesObj = {};
        entities.forEach(entity => entitiesObj[entity.id] = entity);

        entities
            .filter(entity => !this.markers[entity.id])
            .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))

        Object.keys(this.markers)
            .filter(entityId => !entitiesObj[entityId])
            .forEach((entityId) => this.removeMarker(this.markers[entityId]))
    }

    createMarkerFromBench(entity) {
        const position = new google.maps.LatLng(entity.lat, entity.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            entityId: entity.id
        });

        marker.addListener('click', () => this.handleClick(entity));
        this.markers[marker.entityId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.entityId].setMap(null);
        delete this.markers[marker.entityId];
    }
}

export default MarkerManager;