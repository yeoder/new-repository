(()=>{"use strict";const e=window.wp.blocks,l=window.wp.element,t=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.components,s=window.wp.data,r=JSON.parse('{"u2":"pmpro/single-level"}');(0,e.registerBlockType)(r.u2,{icon:{background:"#FFFFFF",foreground:"#1A688B",src:"columns"},edit:function(e){const r=[{value:0,label:(0,t.__)("Choose a level","paid-memberships-pro")}].concat(pmpro.all_level_values_and_labels),{attributes:{layout:c,selected_membership_level:i},setAttributes:p,isSelected:m}=e;return c||p({layout:{type:"constrained"}}),(0,s.select)("core/block-editor").getBlock(e.clientId).innerBlocks.forEach((e=>{(0,s.dispatch)("core/block-editor").updateBlockAttributes(e.clientId,{selected_membership_level:i})})),[m&&(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(n.PanelBody,null,(0,l.createElement)(n.SelectControl,{label:(0,t.__)("Select a level","paid-memberships-pro"),value:i,options:r,onChange:e=>p({selected_membership_level:e})}))),(0,l.createElement)("div",(0,o.useBlockProps)(),(0,l.createElement)(o.InnerBlocks,{templateLock:!1,template:[["pmpro/single-level-name",{selected_membership_level:i}],["pmpro/single-level-price",{selected_membership_level:i}],["pmpro/checkout-button",{selected_membership_level:i}],["pmpro/single-level-expiration",{selected_membership_level:i}],["pmpro/single-level-description",{selected_membership_level:i}]]}))]},save:function(){const e=o.useBlockProps.save();return(0,l.createElement)("div",e,(0,l.createElement)(o.InnerBlocks.Content,null))}})})();