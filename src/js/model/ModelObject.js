/*
listiz is a TODO list for Firefox OS that supports many lists, and even sublists!!!
Copyright © 2014 xinouch
remi.ducceschi@gmail.com

This file is part of listiz

listiz is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

/**
 * model object that contains only the basic informations.
 */
function ModelObject ()
{
	Object.defineProperties(this, {
		// id not defined: it is defined if it comes from the DB, otherwise it is undefined
		/** the type (ModelObject.LIST or ModelObject.TEXT) */
		"type": {
			value: ModelObject.TYPE,
			enumerable: true,
			writable: true
		},

		/** export the object in a string */
		"toString": {
			writable: true
		}
	});
}

Object.defineProperty(ModelObject, "TYPE", { value: "modelobject" });

