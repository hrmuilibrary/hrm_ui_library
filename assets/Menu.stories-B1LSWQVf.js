import{j as e}from"./jsx-runtime-tk2mia4Y.js";import{r as i}from"./iframe-DZ0iOwVY.js";import{M as C,N as I}from"./NestedMenu-BUbXmlXU.js";import{B as b}from"./Button-RicaYwvO.js";import{I as y}from"./IconArrowDownloadFilled-DShU2Oo5.js";import{I as g,a as h,b as x}from"./IconBeach-CSLj0_Hd.js";import{I as M}from"./IconMore-BBesberl.js";import{I as O}from"./IconCheckmark-Tt8tFr-6.js";import{I as n}from"./IconSettings-Bnwn0enL.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-9aUW3Gob.js";import"./index-zfK6JV0v.js";import"./Text-cQSy3PVe.js";import"./helpers-BSIkd2d0.js";import"./index-AboGxAif.js";import"./types-wnfpurwG.js";import"./index-BMpkFs1x.js";import"./Popover-B3lCFM4d.js";import"./IconDismiss-Bq-SAAwl.js";import"./Link-D1JHTQ_t.js";import"./CollapseGroup-DcTLtNQw.js";import"./Divider-pAf8BI-e.js";import"./AnimatePresenceWrapper-COh_fWGi.js";import"./IconChevronDown-BSF8lxHF.js";import"./IconChevronUp-Ubcd6gSx.js";import"./IconChevronRight-JR45gZ0e.js";import"./AvatarGroup-BCqememk.js";import"./DropzoneFileUpload-Cm1oiVKI.js";import"./Label-BpPRZUwc.js";import"./useFormProps-BCQM9aqD.js";import"./ErrorMessage-BiwOCjdh.js";import"./IconDynamicComponent-3tLw_L6I.js";import"./Snackbar-BBIpkiAj.js";import"./Alert-DU8vPa1k.js";import"./IconDismissFilled-DAI-A3qw.js";import"./Progress-CBGg94mJ.js";import"./IconAdd-D9m7M9QH.js";import"./Checkbox-CGBbbirX.js";import"./IconInfo-BTnZ8dMc.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
