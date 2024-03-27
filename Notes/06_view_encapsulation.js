// view encapsulation is concept or behavior in the angular
// style property in the one component does not affect or overwrite the properties of other components

//types of view encapsulation

// viewEncapsulation.None
// viewEncapsulation.Emulated (this type is used by angular by default)
// viewEncapsulation.ShadowDOM

// in viewEncapsulation.Emulated the unique attribute is used on the html element
// and when css is applyed only on the element with the specific attribute so that is donot effect other components

// viewEncapsulation.None by using this type style in the parent component is also applied on the child component

//viewEncapsulation.ShadowDOM by using this type component create the seperate dom so the global style properties(styles.css) are not applied on the elements of that component