(function (window, document) {
	var layout   = document.getElementById("layout"),
	    menu_btn = document.getElementById("menu_btn"),
	    menu     = document.getElementById("menu");

	function toggleClass(element, className) {
		var classes = element.className.split(/\s+/),
		length = classes.length,
		i = 0;

		for(; i < length; i++) {
			if (classes[i] === className) {
				classes.splice(i, 1);
				break;
			}
		}
		// The className is not found
		if (length === classes.length) {
			classes.push(className);
		}
		element.className = classes.join(' ');
	}

	menu_btn.onclick = function(e) {
		e.preventDefault();

		var active = 'active';
		toggleClass(menu, active);
		toggleClass(menu_btn, active);
		toggleClass(layout, active);
	};
}(this, this.document));

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img.expandable').forEach(function(img) {
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.className = 'img-expand-overlay';
            const bigImg = document.createElement('img');
            bigImg.src = img.src;
            overlay.appendChild(bigImg);

            // Function to close overlay
            function closeOverlay() {
                overlay.remove();
                document.removeEventListener('keydown', escListener);
            }

            // Escape key listener
            function escListener(e) {
                if (e.key === 'Escape') {
                    closeOverlay();
                }
            }

            overlay.addEventListener('click', closeOverlay);
            document.addEventListener('keydown', escListener);

            document.body.appendChild(overlay);
        });
    });
});
