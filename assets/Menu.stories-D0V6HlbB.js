import{j as e}from"./jsx-runtime-hRHawQBZ.js";import{r as i}from"./iframe-CUT2okj2.js";import{M as C,N as I}from"./NestedMenu-DsMjJh03.js";import{B as b}from"./Button-Be5IWYBq.js";import{I as y}from"./IconArrowDownloadFilled-CpMYEh1S.js";import{I as g,a as h,b as x}from"./IconBeach-CyGkPjV8.js";import{I as M}from"./IconMore-DP8TQlmv.js";import{I as O}from"./IconCheckmark-Aw8is5Cx.js";import{I as n}from"./IconSettings-C2-8R2UP.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C357lVtq.js";import"./index-BEY2fyvh.js";import"./Text-BP7KAqxP.js";import"./helpers-BLQyT1U3.js";import"./index-AboGxAif.js";import"./types-CE36gYxb.js";import"./index-BhZI_l9L.js";import"./Popover-BatYE50F.js";import"./IconDismiss-CTOZt6dq.js";import"./Link-B5cQBUgV.js";import"./CollapseGroup-B2G9LDQZ.js";import"./Divider-B503EVz3.js";import"./AnimatePresenceWrapper-D3tVW7lW.js";import"./IconChevronDown-4Smsjuv8.js";import"./IconChevronUp-DQtWnqPv.js";import"./IconChevronRight-BumC-wUo.js";import"./AvatarGroup-D4WbA8_B.js";import"./DropzoneFileUpload-C6I-nf4n.js";import"./Label-BZS6yOig.js";import"./useFormProps-CGOHZs_J.js";import"./ErrorMessage-DdSCWbtv.js";import"./IconDynamicComponent-C_tAHs63.js";import"./Snackbar-aQzDvACH.js";import"./Alert-DJccKZrm.js";import"./IconDismissFilled-CDvnXXRj.js";import"./Progress-as3fWM1N.js";import"./IconAdd-D4984g_C.js";import"./Checkbox-CNR1CGOX.js";import"./IconInfo-C2fjOian.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
