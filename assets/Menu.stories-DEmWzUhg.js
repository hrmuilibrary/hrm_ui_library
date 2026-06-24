import{j as e}from"./jsx-runtime-opINjQ5P.js";import{r as i}from"./iframe-BqVisU-n.js";import{M as C,N as I}from"./NestedMenu-0ks96LAS.js";import{B as b}from"./Button-BveyXcOS.js";import{I as y}from"./IconArrowDownloadFilled-DygN2v3w.js";import{I as g,a as h,b as x}from"./IconBeach-D3XI_g0G.js";import{I as M}from"./IconMore-BMFxccE5.js";import{I as O}from"./IconCheckmark-C7NrepoG.js";import{I as n}from"./IconSettings-D1HM58fI.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BkJQhQAS.js";import"./index-BEeTIGou.js";import"./Text-D_jsZjgs.js";import"./helpers-BMLHf3mL.js";import"./index-AboGxAif.js";import"./types-COkUQQaK.js";import"./index-DgnjNEdd.js";import"./Popover-BsiFRGZX.js";import"./IconDismiss-BOqUizsb.js";import"./Link-CmOZMAPm.js";import"./CollapseGroup-C4GkFRrl.js";import"./Divider-D4c7Ckyr.js";import"./AnimatePresenceWrapper-BVdCip_A.js";import"./IconChevronDown-DAMEPyC-.js";import"./IconChevronUp-DdP-5goN.js";import"./IconChevronRight-Dh93jVfs.js";import"./AvatarGroup-R4gTcoLI.js";import"./DropzoneFileUpload-CTP6MBr2.js";import"./Label-CsPJlUYI.js";import"./useFormProps-57kfOxEY.js";import"./ErrorMessage-DdTZUZIu.js";import"./IconDynamicComponent-CJdErVPi.js";import"./Snackbar-D_606uru.js";import"./Alert-DEeY_Som.js";import"./IconDismissFilled-C7RQZlXc.js";import"./Progress-B2hNaNnW.js";import"./IconAdd-CRrnuRgX.js";import"./Checkbox-7h-4tRBB.js";import"./IconInfo-CYcDOtKx.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
