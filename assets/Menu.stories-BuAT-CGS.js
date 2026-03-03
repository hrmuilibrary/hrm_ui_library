import{j as e}from"./jsx-runtime-Bnc0UR-1.js";import{r as i}from"./iframe-BZIurmLL.js";import{M as C,N as I}from"./NestedMenu-NpdjcY8n.js";import{B as b}from"./Button-BxhcRfmC.js";import{I as y}from"./IconArrowDownloadFilled-YjyEYrFF.js";import{I as g,a as h,b as x}from"./IconBeach-CDM9r0uL.js";import{I as M}from"./IconMore-BW80NS5b.js";import{I as O}from"./IconCheckmark-DmsWReUK.js";import{I as n}from"./IconSettings-Ba8jxkIP.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B2eS1kYw.js";import"./index-BjEPROo0.js";import"./Text-6FThkw6b.js";import"./helpers-OJly0rMZ.js";import"./index-DYDl_GcV.js";import"./types-CcV29qzA.js";import"./Popover-9xp8DBb4.js";import"./IconDismiss-C5rK1avL.js";import"./Link-CKUqEncv.js";import"./index-UW4fake6.js";import"./CollapseGroup-ABlOhseB.js";import"./Divider-BXpe8z3n.js";import"./AnimatePresenceWrapper-CVmhcNgf.js";import"./IconChevronDown-CPvek1Yj.js";import"./IconChevronUp-CLMNQGkj.js";import"./IconChevronRight-D9WxNQYO.js";import"./AvatarGroup-CXkvbTAs.js";import"./DropzoneFileUpload-CHqL7Z4f.js";import"./Label-CWoh20B6.js";import"./useFormProps-p0CYaqcD.js";import"./ErrorMessage-Dlhdv7jc.js";import"./IconDynamicComponent-BcyvGVX9.js";import"./Snackbar-DXKWBBz1.js";import"./Alert-Bnohz2y-.js";import"./IconDismissFilled-DfFO6Du5.js";import"./Progress-Z_lJcC5q.js";import"./IconAdd-BCmvL__q.js";import"./Checkbox-CC5L-L2u.js";import"./IconInfo-dD1cPBZG.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
