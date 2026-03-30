import{j as e}from"./jsx-runtime-dU-b1Ado.js";import{r as i}from"./iframe-E8ki4kYP.js";import{M as C,N as I}from"./NestedMenu-OFxxpGH5.js";import{B as b}from"./Button-DfA7txxy.js";import{I as y}from"./IconArrowDownloadFilled-5lHuyvLc.js";import{I as g,a as h,b as x}from"./IconBeach-BsMqsQ1U.js";import{I as M}from"./IconMore-O9P9XDs2.js";import{I as O}from"./IconCheckmark-D_zdrPdh.js";import{I as n}from"./IconSettings-BmNJsK8U.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-2yofTD-4.js";import"./index-BrgYv_Wl.js";import"./Text-BRtvPdmm.js";import"./helpers-CrR1BgBb.js";import"./index-AboGxAif.js";import"./types-ZQhuo9qa.js";import"./Popover-xUPjwi-S.js";import"./IconDismiss-CQ9oGweB.js";import"./Link-IvL_6V3s.js";import"./index-Dwsafb-0.js";import"./CollapseGroup-CWkw4aUz.js";import"./Divider-DbGQinyH.js";import"./AnimatePresenceWrapper-DYiLHEAw.js";import"./IconChevronDown-BMc211Lc.js";import"./IconChevronUp-BeKWKV4-.js";import"./IconChevronRight-CztRPOGB.js";import"./AvatarGroup-BtNzsz7V.js";import"./DropzoneFileUpload-Z6f6udTp.js";import"./Label-Dt14F1Hy.js";import"./useFormProps-ChjxToRq.js";import"./ErrorMessage-DRXTphSM.js";import"./IconDynamicComponent-DhovPQpt.js";import"./Snackbar-Brx6If1M.js";import"./Alert-B5BxxYxp.js";import"./IconDismissFilled-CfnMPCll.js";import"./Progress-BMX7vJy-.js";import"./IconAdd-DUVwByxc.js";import"./Checkbox-Cu53okL5.js";import"./IconInfo-Cq0u-2l8.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
