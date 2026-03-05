import{j as e}from"./jsx-runtime-CeNp5TY1.js";import{r as i}from"./iframe-gUduO0er.js";import{M as C,N as I}from"./NestedMenu-BF2_o6uF.js";import{B as b}from"./Button-CGEhWhn9.js";import{I as y}from"./IconArrowDownloadFilled-BN5_JFIE.js";import{I as g,a as h,b as x}from"./IconBeach-BZJP_TcJ.js";import{I as M}from"./IconMore-CzviZh0O.js";import{I as O}from"./IconCheckmark-N0fonzF9.js";import{I as n}from"./IconSettings-CBGxjF2F.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Dz4ooSy2.js";import"./index-D2hcE3N_.js";import"./Text-C3jrfAPs.js";import"./helpers-B4IiAyNm.js";import"./index-DYDl_GcV.js";import"./types-DG_PiXwV.js";import"./Popover-Bz7foySY.js";import"./IconDismiss-E_YJxBtr.js";import"./Link-D0vRcW-Y.js";import"./index-0pnkKbZs.js";import"./CollapseGroup-BWTWf35c.js";import"./Divider-CBGl0GjH.js";import"./AnimatePresenceWrapper-B6iOufUc.js";import"./IconChevronDown-CJUuZGOT.js";import"./IconChevronUp-TgF-WCMc.js";import"./IconChevronRight-Morxs7XH.js";import"./AvatarGroup-B8iaUke3.js";import"./DropzoneFileUpload-EceAIRnc.js";import"./Label-CTNGmzKo.js";import"./useFormProps-B537u9vN.js";import"./ErrorMessage-B8XN-XZm.js";import"./IconDynamicComponent-BtpQW8Cn.js";import"./Snackbar-CFk3Lr_S.js";import"./Alert-BgNs7TFY.js";import"./IconDismissFilled-CQELEHAA.js";import"./Progress-BVtvyn0d.js";import"./IconAdd-BjzYHF57.js";import"./Checkbox-DD6JuhAJ.js";import"./IconInfo-EpsgUDiA.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
