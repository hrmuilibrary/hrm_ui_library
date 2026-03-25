import{j as e}from"./jsx-runtime-Wefg3lyS.js";import{r as i}from"./iframe-D5-37b9-.js";import{M as C,N as I}from"./NestedMenu-CC1wXnzR.js";import{B as b}from"./Button-BL0ENPi6.js";import{I as y}from"./IconArrowDownloadFilled-D8cFrvw7.js";import{I as g,a as h,b as x}from"./IconBeach-DV8vbHk2.js";import{I as M}from"./IconMore-BbvptjRt.js";import{I as O}from"./IconCheckmark-CeacOGVm.js";import{I as n}from"./IconSettings-ew1SfFyM.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DONH23QR.js";import"./index-BEiQ90SW.js";import"./Text-DGHk6ThX.js";import"./helpers-gxvJZqSs.js";import"./index-AboGxAif.js";import"./types-Ce9ZT5UI.js";import"./Popover-CqlmAhVV.js";import"./IconDismiss-BjanH4_j.js";import"./Link-D0EeU3RN.js";import"./index-Cl4GZ-nU.js";import"./CollapseGroup-D8lpur--.js";import"./Divider-OVlzqoOr.js";import"./AnimatePresenceWrapper-DbiWYhd2.js";import"./IconChevronDown-CdRdg2ZA.js";import"./IconChevronUp-z4VyNy_S.js";import"./IconChevronRight-6twQFcSx.js";import"./AvatarGroup-dzYPj-Qs.js";import"./DropzoneFileUpload-D_NH9XmF.js";import"./Label-DOznAunB.js";import"./useFormProps-udNsIH1U.js";import"./ErrorMessage-BGWPfiD7.js";import"./IconDynamicComponent-BEeeleGW.js";import"./Snackbar-DUkkiiFs.js";import"./Alert-BmCkEfHc.js";import"./IconDismissFilled-Duf72ET3.js";import"./Progress-CkIE0yFV.js";import"./IconAdd-DyecdZ7D.js";import"./Checkbox-7sxLjJXm.js";import"./IconInfo-CaHzqD_0.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
