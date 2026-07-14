import{j as e}from"./jsx-runtime-3Q_sdxiq.js";import{r as i}from"./iframe-DK9NnRRJ.js";import{M as C,N as I}from"./NestedMenu-CKGBpxqc.js";import{B as b}from"./Button-BXo3ltW6.js";import{I as y}from"./IconArrowDownloadFilled-BJxKUVGt.js";import{I as g,a as h,b as x}from"./IconBeach-zesF9gKu.js";import{I as M}from"./IconMore-DSmmQb2I.js";import{I as O}from"./IconCheckmark-TDrL7Xs4.js";import{I as n}from"./IconSettings-DrJiMA5u.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CMcqhJF2.js";import"./index-DqlRVWq3.js";import"./Text-DjouLYo4.js";import"./helpers-BplHdA7F.js";import"./index-AboGxAif.js";import"./types-jammdryo.js";import"./index-DVN3lhXT.js";import"./Popover-CT-0ONbV.js";import"./IconDismiss-BklvGjUb.js";import"./Link-DzNKWFyo.js";import"./CollapseGroup-DYfPLSMp.js";import"./Divider-BTgFSVXp.js";import"./AnimatePresenceWrapper-C4g7vmcb.js";import"./IconChevronDown-BAD1q4sH.js";import"./IconChevronUp-jmqN9HD8.js";import"./IconChevronRight-53PkZs3C.js";import"./AvatarGroup-C1p0ChIy.js";import"./DropzoneFileUpload-BrMmRdLi.js";import"./Label-C2F5sOOh.js";import"./useFormProps-q1o0_ocl.js";import"./ErrorMessage-Dz6f40Qt.js";import"./IconDynamicComponent-D0cx9qUZ.js";import"./Snackbar-vz10q9tn.js";import"./Alert-CF-jva8b.js";import"./IconDismissFilled-BJWxudke.js";import"./Progress--Jv0hBV-.js";import"./IconAdd-BWhYPbsr.js";import"./Checkbox-DNQyCuYA.js";import"./IconInfo-Cn6BXtj3.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
