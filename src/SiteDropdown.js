import React from 'react';
import { useState } from 'react';
import Dropdown from  'react-bootstrap/Dropdown';


function SiteDropdown() {
	const [site, setSite] = useState("Site Selector");

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle>
					{site}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item onClick={() => setSite("Walmart")}>WalMart</Dropdown.Item>
    			<Dropdown.Item onClick={() => setSite("Target")}>Target</Dropdown.Item>
    			<Dropdown.Item onClick={() => setSite("Lowes")}>Lowes</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
}

export default SiteDropdown;