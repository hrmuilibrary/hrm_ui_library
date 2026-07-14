import{j as e}from"./jsx-runtime-B7SU4NzS.js";import{r as i}from"./iframe-BiiXUHFP.js";import{M as C,N as I}from"./NestedMenu-BCtKs04T.js";import{B as b}from"./Button-DMlVNJTd.js";import{I as y}from"./IconArrowDownloadFilled-wkXiOTT1.js";import{I as g,a as h,b as x}from"./IconBeach-CeLm1XVy.js";import{I as M}from"./IconMore-BryqfRLZ.js";import{I as O}from"./IconCheckmark-C3tXv74f.js";import{I as n}from"./IconSettings-Wak6cBXZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DKFGlf6d.js";import"./index-BMnlszqU.js";import"./Text-BMhshnkU.js";import"./helpers-LcuiYgGm.js";import"./index-AboGxAif.js";import"./types-C0-R_ZNE.js";import"./index-BmVcHfyF.js";import"./Popover-Al0Y9BwC.js";import"./IconDismiss-VXIrvDzc.js";import"./Link-SgmEwoJ6.js";import"./CollapseGroup-Dr0r3X_H.js";import"./Divider-B-f5_zaU.js";import"./AnimatePresenceWrapper-cyjPmGwF.js";import"./IconChevronDown-oGpNY4pw.js";import"./IconChevronUp-DOdCw-kf.js";import"./IconChevronRight-B37MiQmd.js";import"./AvatarGroup-D9UVGH71.js";import"./DropzoneFileUpload-DDWq-h-0.js";import"./Label-DVWp-Zhs.js";import"./useFormProps-DQNISqCc.js";import"./ErrorMessage-BM6vMfsI.js";import"./IconDynamicComponent-TMfWqvO_.js";import"./Snackbar-Cfb45o_1.js";import"./Alert-B4QX6t1g.js";import"./IconDismissFilled-Dmkc5bxO.js";import"./Progress-HlxbfBcr.js";import"./IconAdd-CrbQt5CL.js";import"./Checkbox-AcI-oX4a.js";import"./IconInfo-BpUPZXPi.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
